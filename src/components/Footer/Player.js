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
  ClipboardListIcon,
  DeviceMobileIcon,
  DeviceTabletIcon,
  MicrophoneIcon,
  VolumeOffIcon,
  VolumeUpIcon,
} from "@heroicons/react/outline";
import { secondsToTime } from "utils";
import CustomRange from "components/CustomRange";
import { useMemo } from "react";

const Player = () => {
  const [audio, state, controls, ref] = useAudio({
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
  });

  const volumeIcon = useMemo(() => {
    if (state.volume === 0 || state.muted)
      return <VolumeOffIcon className="w-4 h-4" />;
    else return <VolumeUpIcon className="w-4 h-4" />;
  }, [state.volume, state.muted]);

  return (
    <div className="flex items-center justify-between h-full px-4">
      <div className="min-w-[11.25rem] w-[30%]">Sol</div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col items-center">
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
              <PauseIcon className="w-4 h-4" />
            ) : (
              <PlayIcon className="w-4 h-4" />
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
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          {volumeIcon}
        </button>
        <div className="w-24 max-w-full">
          <CustomRange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => controls.volume(value)}
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
