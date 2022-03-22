import { useAudio } from "react-use";
import {
  FastForwardIcon,
  PauseIcon,
  PlayIcon,
  RefreshIcon,
  RewindIcon,
  SwitchHorizontalIcon,
} from "@heroicons/react/solid";
import {
  ArrowsExpandIcon,
  ChevronLeftIcon,
  ClipboardListIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  HeartIcon,
  MicrophoneIcon,
  ViewGridAddIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setControls, setPlaying, setSidebar } from "stores/player";

const Player = () => {
  const { current, sidebar } = useSelector((state) => state.player);
  const dispatch = useDispatch();

  const [audio, state, controls, ref] = useAudio({
    src: current?.src,
  });

  useEffect(() => {
    controls.play();
  }, [current]);

  useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);

  useEffect(() => {
    dispatch(setControls(controls));
  }, []);

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
      return <VolumeOffIcon className="w-4 h-4" />;
    else return <VolumeUpIcon className="w-4 h-4" />;
  }, [state.volume, state.muted]);

  return (
    <div className="flex items-center justify-between h-full px-4">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 mr-3 flex-shrink-0 relative group">
                  <img src={current?.image} />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="w-6 h-6 flex items-center justify-center bg-black opacity-0 rounded-full rotate-90 absolute top-1 right-1 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06]"
                  >
                    <ChevronLeftIcon className="w-4 h-4" />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1">{current.title}</h6>
                <p className="text-xs text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <HeartIcon className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <ViewGridAddIcon className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] px-4 flex flex-col items-center">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <SwitchHorizontalIcon className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RewindIcon className="w-4 h-4" />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 bg-white text-black rounded-full flex items-center justify-center hover:scale-[1.06]"
          >
            {state?.playing ? (
              <PauseIcon className="w-6 h-6" />
            ) : (
              <PlayIcon className="w-6 h-6" />
            )}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <FastForwardIcon className="w-4 h-4" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <RefreshIcon className="w-4 h-4" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
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
      <div className="min-w-[11.25rem] w-[30%] flex items-center justify-end">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MicrophoneIcon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <ClipboardListIcon className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <DeviceMobileIcon className="w-4 h-4" />
          <DeviceTabletIcon className="w-4 h-4 -ml-[0.46rem] ring-2 ring-footer ring-inset rounded-md" />
        </button>
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
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <ArrowsExpandIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Player;
