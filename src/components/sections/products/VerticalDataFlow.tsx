
import { memo } from "react";

const VerticalDataFlow = memo(() => {
  return (
    <div className="relative w-full h-full">
      <div className="vertical-data-flow">
        <div className="v-dot"></div>
        <div className="v-dot"></div>
        <div className="v-dot"></div>
      </div>
      <style>{`
        @keyframes flowDown {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(32px); opacity: 0; }
        }

        .vertical-data-flow {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 50%;
          transform: translateX(-50%);
        }

        .v-dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: #93C851;
          border-radius: 50%;
          opacity: 0;
          left: 50%;
          transform: translateX(-50%);
          animation: flowDown 2s infinite;
        }

        .v-dot:nth-child(1) { animation-delay: 0s; }
        .v-dot:nth-child(2) { animation-delay: 0.66s; }
        .v-dot:nth-child(3) { animation-delay: 1.33s; }
      `}</style>
    </div>
  );
});

VerticalDataFlow.displayName = "VerticalDataFlow";

export default VerticalDataFlow;
