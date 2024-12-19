'use client'

import { useState } from 'react'
import Link from 'next/link'
import { CircleUser, Download, Upload, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { ModeToggle } from '@/components/ModeToggle'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function Schedula() {
  const [file1, setFile1] = useState(null)
  const [file2, setFile2] = useState(null)
  const [schedule, setSchedule] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleFileUpload = (event, fileNumber) => {
    const uploadedFile = event.target.files?.[0]
    if (uploadedFile) {
      if (fileNumber === 1) {
        setFile1(uploadedFile)
      } else {
        setFile2(uploadedFile)
      }
      console.log(`File ${fileNumber} uploaded:`, uploadedFile)
    }
  }

  const downloadTemplate = (content, filename) => {
    const blob = new Blob([content], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  const handleDownloadFormat1 = () => {
    const formatContent1 = `rooms\n101 : 25\n115 : 50\n200 : 250 ;\ncourses\ncs101, cs102, cs110, cs120, cs220, cs412, cs430, cs612, cs630 ;\ntimes\nMWF9, MWF10, MWF11, MWF2, TT9, TT10:30, TT2, TT3:30 ;`
    downloadTemplate(formatContent1, 'schedule_format.txt')
  }

  const handleDownloadFormat2 = () => {
    const formatContent2 = `course   enrollment   preferences\ncs101    180          MWF9, MWF10, MWF11, TT9\ncs412    80           MWF9, TT9, TT10:30\ncs612    35\ncs630    40\n`
    downloadTemplate(formatContent2, 'schedule_format_file2.txt')
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData()
    if (file1) formData.append('file1', file1)
    if (file2) formData.append('file2', file2)

    try {
      const response = await fetch('http://localhost:5000/read_files', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Something went wrong on the server.')
      }

      const result = await response.json()

      if (result.schedule) {
        setSchedule(result.schedule)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSchedule(null)
    } finally {
      setIsLoading(false)
    }
  }

  const formatScheduleGrid = () => {
    if (!schedule) return null

    const rooms = Array.from(new Set(schedule.map((item) => item.room))).sort()
    const times = Array.from(new Set(schedule.map((item) => item.time))).sort()

    const grid = rooms.map((room) => {
      const row = { room }
      times.forEach((time) => {
        const course = schedule.find((item) => item.room === room && item.time === time)
        row[time] = course ? course.course : ''
      })
      return row
    })

    return { grid, rooms, times }
  }

  const { grid, rooms, times } = formatScheduleGrid() || {}

  const exportSchedule = () => {
    if (!schedule) return

    let csvContent = 'Room,Time,Course\n'
    schedule.forEach((item) => {
      csvContent += `${item.room},${item.time},${item.course}\n`
    })

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    if (link.download !== undefined) {
      const url = URL.createObjectURL(blob)
      link.setAttribute('href', url)
      link.setAttribute('download', 'schedule.csv')
      link.style.visibility = 'hidden'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6">
        <div className="flex text-4xl font-bold">Schedula</div>
        <nav className="ml-auto flex items-center gap-4 md:gap-2 lg:gap-4">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/">Logout</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </nav>
      </header>

      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>File 1: Rooms, Courses, and Timing</CardTitle>
              <CardDescription>Upload the file containing room information, course list, and available time slots.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="file-upload1">Upload File 1:</Label>
                  <Input
                    id="file-upload1"
                    type="file"
                    accept=".txt"
                    onChange={(e) => handleFileUpload(e, 1)}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleDownloadFormat1}>
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>File 2: Course Details and Preferences</CardTitle>
              <CardDescription>Upload the file containing course enrollment and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <Label htmlFor="file-upload2">Upload File 2:</Label>
                  <Input
                    id="file-upload2"
                    type="file"
                    accept=".txt"
                    onChange={(e) => handleFileUpload(e, 2)}
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button variant="outline" onClick={handleDownloadFormat2}>
                <Download className="mr-2 h-4 w-4" />
                Download Template
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-end">
          <Button
            onClick={handleSubmit}
            disabled={!file1 || !file2 || isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Loading
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" />
                Submit
              </>
            )}
          </Button>
        </div>

        {schedule && (
          <div className="mt-4">
            <Card>
              <CardHeader>
                <CardTitle>Generated Schedule</CardTitle>
                <CardDescription>The schedule has been generated based on the provided files.</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Room</TableHead>
                      {times && times.map((time) => <TableHead key={time}>{time}</TableHead>)}
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {grid && grid.map((row) => (
                      <TableRow key={row.room}>
                        <TableCell>{row.room}</TableCell>
                        {times.map((time) => (
                          <TableCell key={time}>{row[time] || ''}</TableCell>
                        ))}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button onClick={exportSchedule}>Export Schedule</Button>
              </CardFooter>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}
