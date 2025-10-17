
import React from 'react';

export interface SubMenuItem {
  name: string;
}

export interface NavItem {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subMenu?: SubMenuItem[];
}
