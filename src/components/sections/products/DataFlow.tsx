
import { memo } from "react";

const DataFlow = memo(() => {
  return (
    <div>
      <div className="data-flow">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <div className="data-flow-reverse">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
      <style>{`
        @keyframes flowRight {
          0% { transform: translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(64px); opacity: 0; }
        }

        @keyframes flowLeft {
          0% { transform: translateX(64px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(0); opacity: 0; }
        }

        .data-flow {
          position: absolute;
          width: 100%;
          height: 100%;
          top: -2px;
        }

        .data-flow-reverse {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 2px;
        }

        .dot {
          position: absolute;
          width: 3px;
          height: 3px;
          background-color: #93C851;
          border-radius: 50%;
          opacity: 0;
        }

        .data-flow .dot {
          animation: flowRight 3s infinite;
        }

        .data-flow-reverse .dot {
          animation: flowLeft 3s infinite;
        }

        .data-flow .dot:nth-child(1) { animation-delay: 0s; }
        .data-flow .dot:nth-child(2) { animation-delay: 1s; }
        .data-flow .dot:nth-child(3) { animation-delay: 2s; }

        .data-flow-reverse .dot:nth-child(1) { animation-delay: 1.5s; }
        .data-flow-reverse .dot:nth-child(2) { animation-delay: 2.5s; }
        .data-flow-reverse .dot:nth-child(3) { animation-delay: 0.5s; }
      `}</style>
    </div>
  );
});

DataFlow.displayName = "DataFlow";

export default DataFlow;
