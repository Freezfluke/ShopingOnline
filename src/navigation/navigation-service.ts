// navigation.ts

import {
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';
import React from 'react';
import { RootStackParamList } from './navigation-types';

export const navigationRef = React.createRef<NavigationContainerRef<RootStackParamList>>();
export const isReadyRef = React.createRef<boolean>();

export const navigateTo = <T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) => {
  if (!navigationRef.current) return;
  navigationRef.current.navigate(name, params);
};

export const pushTo = <T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) => {
  if (!navigationRef.current) return;
  navigationRef.current.dispatch(StackActions.push(name, params));
};

// This function is only valid if you're using a custom navigator that exposes `.push()` directly
export const navigateStackTo = <T extends keyof RootStackParamList>(
  name: T,
  params?: RootStackParamList[T]
) => {
  if (!navigationRef.current) return;

  // Typescript workaround — push isn't guaranteed to exist on the type
  (navigationRef.current as any).push(name, params);
};

export const goBack = () => {
  if (!navigationRef.current) return;
  navigationRef.current.goBack();
};

export const goToTop = () => {
  if (!navigationRef.current) return;
  navigationRef.current.dispatch(StackActions.popToTop());
};

export const goReset = <T extends keyof RootStackParamList>(name: T) => {
  if (!navigationRef.current) return;
  navigationRef.current.reset({
    index: 0,
    routes: [{ name }],
  });
};