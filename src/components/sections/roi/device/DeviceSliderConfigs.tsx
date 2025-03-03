
import { DeviceCounts } from '@/utils/roi';
import { Laptop, Monitor, Cpu, Tablet, Smartphone, MousePointer } from "lucide-react";
import { DeviceSliderConfig } from './DeviceSlider';

// Function to create device slider configurations
export const createDeviceConfigs = (isEnterprise: boolean): DeviceSliderConfig[] => {
  return [
    {
      key: 'macbooks',
      label: 'MacBooks',
      icon: <Laptop className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 500,
      step: 1
    },
    {
      key: 'laptops',
      label: 'Laptops (non-MacBook)',
      icon: <Laptop className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 1000,
      step: 1
    },
    {
      key: 'desktops',
      label: 'Desktops',
      icon: <Cpu className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 500,
      step: 1
    },
    {
      key: 'tablets',
      label: 'Tablets/iPads',
      icon: <Tablet className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 300,
      step: 1
    },
    {
      key: 'monitors',
      label: 'Monitors',
      icon: <Monitor className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 1000,
      step: 1
    },
    {
      key: 'accessories',
      label: 'Accessories (mouse, keyboard, webcam, etc.)',
      icon: <MousePointer className="w-4 h-4 text-primary" />,
      min: 0,
      max: isEnterprise ? 10000 : 2000,
      step: 1
    }
  ];
};
