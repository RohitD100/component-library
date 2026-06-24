import { calendarWrapperStyle } from "./datePickerStyle";
import DatePickerHeader from "./DatePickerHeader";
import DatePickerGrid from "./DatePickerGrid";
import DatePickerFooter from "./DatePickerFooter";
import type { DatePickerCalanderProps } from "./type";

const DatePickerCalendar = (props: DatePickerCalanderProps) => {
    return (
        <div
            className={calendarWrapperStyle}
            role="dialog"
            aria-label="Date picker"
        >
            <DatePickerHeader
                viewMonth={props.viewMonth}
                viewYear={props.viewYear}
                years={props.years}
                setViewMonth={props.setViewMonth}
                setViewYear={props.setViewYear}
            />
            <DatePickerGrid
                viewYear={props.viewYear}
                viewMonth={props.viewMonth}
                value={props.value}
                today={props.today}
                minDate={props.minDate}
                maxDate={props.maxDate}
                customDates={props.customDates}
                onChange={props.onChange}
                setOpen={props.setOpen}
            />
            <DatePickerFooter
                today={props.today}
                onChange={props.onChange}
                setViewYear={props.setViewYear}
                setViewMonth={props.setViewMonth}
                setOpen={props.setOpen}
            />
        </div>
    );
};

export default DatePickerCalendar;
