"use client";

import { Label } from "../../components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export function RadioGroups() {
  return (
    <div className="w-[70vw]">
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="yes" id="r1" />
          <Label
            className="text-black text-sm text-center font-light font_Cormorant"
            htmlFor="r1"
          >
            We will definetely come
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="no" id="r2" />
          <Label
            htmlFor="r2"
            className="text-black text-sm text-center font-light font_Cormorant"
          >
            Unfortunetly we will not be able to come
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
