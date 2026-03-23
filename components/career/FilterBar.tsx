"use client";

import { motion } from "motion/react";

interface FilterBarProps {
  selectedDepartment: string;
  selectedLocation: string;
  selectedType: string;
  departments: string[];
  locations: string[];
  types: string[];
  onDepartmentChange: (dept: string) => void;
  onLocationChange: (loc: string) => void;
  onTypeChange: (type: string) => void;
}

export function FilterBar({
  selectedDepartment,
  selectedLocation,
  selectedType,
  departments,
  locations,
  types,
  onDepartmentChange,
  onLocationChange,
  onTypeChange,
}: FilterBarProps) {
  return (
    <motion.div
      className="space-y-8 mb-16"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex flex-col gap-6">
        <FilterGroup
          label="Department"
          options={departments}
          selected={selectedDepartment}
          onChange={onDepartmentChange}
        />
        <FilterGroup
          label="Location"
          options={locations}
          selected={selectedLocation}
          onChange={onLocationChange}
        />
        <FilterGroup
          label="Type"
          options={types}
          selected={selectedType}
          onChange={onTypeChange}
        />
      </div>
    </motion.div>
  );
}

interface FilterGroupProps {
  label: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
}

function FilterGroup({ label, options, selected, onChange }: FilterGroupProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4">
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground/60 w-28 shrink-0">
        {label}
      </span>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => onChange(option)}
            className={`px-4 py-1.5 rounded-full text-[13px] transition-all duration-300 border ${
              selected === option
                ? "bg-white text-black border-white shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                : "bg-white/[0.02] text-muted-foreground border-white/[0.05] hover:border-white/20 hover:text-white"
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
