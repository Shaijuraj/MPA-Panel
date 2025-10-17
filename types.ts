import React from 'react';

export interface SubMenuItem {
  name: string;
  translationKey: string;
}

export interface NavItem {
  name: string;
  translationKey: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  subMenu?: SubMenuItem[];
}