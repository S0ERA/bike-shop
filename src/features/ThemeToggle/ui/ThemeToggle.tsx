import React from 'react';
import { SwitchContainer, Slider, Star, Sun } from '@/features/ThemeToggle/ui/styles';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/hooks';
import { toggleTheme } from '@/entities/theme/model/slice';

export const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector((state) => state.theme.isDarkTheme);

  return (
    <SwitchContainer onClick={() => dispatch(toggleTheme())} $isDarkTheme={isDarkTheme}>
      <Sun />
      <Slider $isDarkTheme={isDarkTheme} />
      <Star />
    </SwitchContainer>
  );
};