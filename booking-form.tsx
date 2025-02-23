"use client"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function BookingForm() {
  const [date, setDate] = useState<Date>()

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Select Service</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="facial">Facial Treatment</SelectItem>
            <SelectItem value="massage">Body Massage</SelectItem>
            <SelectItem value="manicure">Manicure</SelectItem>
            <SelectItem value="pedicure">Pedicure</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Select Date</label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline" className="w-full justify-start text-left">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? date.toDateString() : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Select Time</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Choose a time" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0900">9:00 AM</SelectItem>
            <SelectItem value="1000">10:00 AM</SelectItem>
            <SelectItem value="1100">11:00 AM</SelectItem>
            <SelectItem value="1400">2:00 PM</SelectItem>
            <SelectItem value="1500">3:00 PM</SelectItem>
            <SelectItem value="1600">4:00 PM</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button className="w-full">Book Appointment</Button>
    </div>
  )
}

