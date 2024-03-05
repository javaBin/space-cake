import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import year_data from "@/test_json/test_year"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
import { cn } from "@/lib/utils"

const Header = () => {
    return (
        <header className="flex justify-center items-center h-10 gap-5">
            <img src="/images/ChatG.png" alt="SpaceCake" className="h-12 w-12" />
            <h1>SpaceCake</h1>
            <select name="conference" id="conferences">
                {year_data.conferences.map((conference) => (
                    <option key={conference.id} value={conference.slug}>
                        {conference.name}
                    </option>
                ))}
            </select>
        </header>
    )
}

export default Header