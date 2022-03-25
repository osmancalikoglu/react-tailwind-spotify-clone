import { useSelector } from "react-redux";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RefreshIcon,
  RewindIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/solid";
import { secondsToTime } from "utils";
import CustomRange from "./CustomRange";
import { XCircleIcon } from "@heroicons/react/outline";
import logo from "img/logo.svg";

const FullScreenPlayer = ({ toggle, state, controls, volumeIcon }) => {
  const { current } = useSelector((state) => state.player);

  return (
    <div
      onClick={controls[state?.playing ? "pause" : "play"]}
      className="h-full relative"
    >
      <div
        className="absolute inset-0 bg-cover bg-center blur-md opacity-30"
        style={{ backgroundImage: `url(${current?.image})` }}
      />
      <div className="absolute top-8 left-8 flex items-center gap-x-4 opacity-70">
        <img
          src={logo}
          className="w-[2.125rem] h-[2.125rem] object-cover object-left"
        />
        <div className="text-xs">
          <p className="uppercase tracking-wider">PLAYING FROM PLAYLIST</p>
          <h6 className="mt-0.5 font-medium">{current?.description}</h6>
        </div>
      </div>
      <div className="absolute bottom-36 left-8 flex items-center gap-x-5">
        <img src={current?.image} className="w-24 h-24 object-cover" alt="" />
        <div className="self-end">
          <h3 className="text-3xl font-semibold">{current?.title}</h3>
          <p className="text-sm font-medium opacity-50">{current?.artist}</p>
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full absolute bottom-4 px-8 flex flex-col-reverse items-center"
      >
        <div className="flex items-center gap-x-5">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <SwitchHorizontalIcon className="w-6 h-6" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RewindIcon className="w-6 h-6" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-16 h-16 bg-white text-black rounded-full flex items-center justify-center hover:scale-[1.06]"
          >
            {state?.playing ? (
              <PauseIcon className="w-12 h-12" />
            ) : (
              <PlayIcon className="w-12 h-12" />
            )}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FastForwardIcon className="w-6 h-6" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RefreshIcon className="w-6 h-6" />
          </button>
          <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end absolute right-6 bottom-4">
            <button
              onClick={controls[state?.muted ? "unmute" : "mute"]}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              {volumeIcon}
            </button>
            <div className="w-24 max-w-full">
              <CustomRange
                step={0.01}
                min={0}
                max={1}
                value={state?.muted ? 0 : state?.volume}
                onChange={(value) => {
                  controls.volume(value);
                  controls.unmute();
                }}
              />
            </div>
            <button
              onClick={toggle}
              className="w-8 h-8 flex items-center justify-center ml-4 text-white text-opacity-70 hover:text-opacity-100"
            >
              <XCircleIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center gap-x-2 mb-1.5">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <CustomRange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullScreenPlayer;
