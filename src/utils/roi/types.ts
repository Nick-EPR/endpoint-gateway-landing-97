
export interface Trend {
  label: string;
  value: string;
  trend: number;
  tooltip: string;
}

export interface DeviceCounts {
  macbooks: number;
  laptops: number;
  desktops: number;
  tablets: number;
  monitors: number;
  accessories: number;
}

// Default device counts based on industry averages
export const getDefaultDeviceCounts = (): DeviceCounts => {
  return {
    macbooks: 20,
    laptops: 80,
    desktops: 30,
    tablets: 15,
    monitors: 130,
    accessories: 180
  };
};
