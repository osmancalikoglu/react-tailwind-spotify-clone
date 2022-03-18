import { Range, getTrackBackground } from "react-range";

const CustomRange = ({ value, step, min, max, onChange }) => {
  return (
    <Range
      values={[value]}
      step={step}
      min={min}
      max={max}
      onChange={(values) => onChange(values[0])}
      renderTrack={({ props, children }) => (
        <div
          onMouseDown={props.onMouseDown}
          onTouchStart={props.onTouchStart}
          className="h-9 w-full flex group"
          style={props.style}
        >
          <div
            ref={props.ref}
            className="h-1 w-full rounded-md self-center"
            style={{
              background: getTrackBackground({
                values: [value],
                colors: ["#1db954", "#535353"],
                min,
                max,
              }),
            }}
          >
            {children}
          </div>
        </div>
      )}
      renderThumb={({ props, isDragged }) => (
        <div
          className={`w-3 h-3 rounded-full bg-white group-hover:opacity-100 ${
            !isDragged && "opacity-0"
          }`}
          {...props}
          style={{
            ...props.style,
            boxShadow: "0px 2px 4px 0 rgb(0 0 0 / 50%)",
          }}
        />
      )}
    />
  );
};
export default CustomRange;
