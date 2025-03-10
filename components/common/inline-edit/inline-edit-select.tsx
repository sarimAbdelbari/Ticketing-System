"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InlineEditField } from "./inline-edit-field";

interface Option {
  value: string;
  label: string;
}

interface InlineEditSelectProps {
  value: string;
  options: Option[];
  onSave: (value: string) => Promise<void>;
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
  label?: string;
  className?: string;
}

export function InlineEditSelect({
  value,
  options,
  onSave,
  isEditing,
  setIsEditing,
  label,
  className,
}: InlineEditSelectProps) {
  return (
    <InlineEditField
      value={value}
      onSave={onSave}
      isEditing={isEditing}
      setIsEditing={setIsEditing}
      className={className}
    >
      {isEditing ? (
        <div className="space-y-2">
          {label && (
            <label className="text-sm font-medium">{label}</label>
          )}
          <Select
            value={value}
            onValueChange={(newValue) => onSave(newValue)}
          >
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      ) : (
        <div>
          {label && (
            <span className="text-sm text-muted-foreground">{label}</span>
          )}
          <p className="font-medium">
            {options.find(opt => opt.value === value)?.label || value}
          </p>
        </div>
      )}
    </InlineEditField>
  );
}