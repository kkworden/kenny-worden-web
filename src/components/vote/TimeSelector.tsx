import React, {ChangeEvent, useEffect} from "react";

interface TimeSelectorProps {
  title: string
  prefix: string
  time: number
  setTime: (time: number) => void
  timeUnit: string
  setTimeUnit: (timeUnit: string) => void
}

// This component requires prop drilling to set the time and time unit.
export default function TimeSelector(props: TimeSelectorProps) {

  useEffect(() => {
    // Prevent negative or zero time, also scope to reasonable values.
    if (props.time < 1) {
      props.setTime(1);
    } else if (props.timeUnit === "minute" && props.time > 4320) {
      // 3 days, in minutes
      props.setTime(4320);
    } else if (props.timeUnit === "hour" && props.time > 168) {
      // 7 days, in hours
      props.setTime(168);
    } else if (props.timeUnit === "day" && props.time > 14) {
      // 14 days
      props.setTime(14);
    }
  }, [props, props.time])

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    props.setTimeUnit(e.target.value);
  };

  return (<>
    <h2>{props.title}</h2>
    <div className="flex gap-4">
      <input
        className="basis-1/4"
        type="number"
        name={`${props.prefix}_time`}
        value={props.time}
        onChange={(e) => props.setTime(Number(e.target.value))}/>
      <div className="flex gap-4 basis-3/4">
        <div className="flex gap-4">
          <input
            type="radio"
            name={`${props.prefix}_unit`}
            value="minute"
            onChange={handleUnitChange}
            defaultChecked={true}/>
          minutes
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name={`${props.prefix}_unit`}
            value="hour"
            onChange={handleUnitChange}/>
          hours
        </div>
        <div className="flex gap-4">
          <input
            type="radio"
            name={`${props.prefix}_unit`}
            value="day"
            onChange={handleUnitChange}/>
          days
        </div>
      </div>
    </div>
  </>);
}