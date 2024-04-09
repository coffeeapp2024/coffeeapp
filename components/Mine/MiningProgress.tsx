import React from "react";
import * as Progress from "@radix-ui/react-progress";

function MiningProgress() {
  const [progress, setProgress] = React.useState(13);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Progress.Root
      className="absolute top-0 left-0 h-2 w-full overflow-hidden rounded-full bg-neutral-200"
      value={progress}
    >
      <Progress.Indicator
        className="h-full w-full flex-1 bg-gradient-to-r from-yellow-300 to-orange-300 transition-all"
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </Progress.Root>
  );
}

export default MiningProgress;
