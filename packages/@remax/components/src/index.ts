import React, { CSSProperties, Props } from 'react';
import { TComponent } from './types';

interface IProps {
  [s: string]: any;
}

const styleString = (style: CSSProperties) =>
  Object.entries(style).reduce((styleString, [propName, propValue]) => {
    return `${styleString}${propName}:${propValue}`;
  }, '');

function factoryComponent(component: TComponent) {
  // props 类型存在问题
  return <T>(props: Props<T> & IProps) => {
    const { children = [] } = props;
    const newProps: IProps = {};
    for (const propKey of Object.keys(props)) {
      if (propKey === 'style') {
        newProps.style = styleString(props.style!);
      } else {
        newProps[propKey] = props[propKey];
      }
    }
    // ts dose not accept ...emptyArray
    return React.createElement(component, newProps, children);
  };
}

export const View = factoryComponent('view');
export const ScrollView = factoryComponent('scroll-view');
export const Swiper = factoryComponent('swiper');
export const SwiperItem = factoryComponent('swiper-item');
export const MovableView = factoryComponent('movable-view');
export const MovableArea = factoryComponent('movable-area');
export const CoverView = factoryComponent('cover-view');
export const CoverImage = factoryComponent('cover-image');
export const Icon = factoryComponent('icon');
export const Text = factoryComponent('text');
export const RichText = factoryComponent('rich-text');
export const Progress = factoryComponent('progress');
export const Button = factoryComponent('button');
export const CheckboxGroup = factoryComponent('checkbox-group');
export const Checkbox = factoryComponent('checkbox');
export const Form = factoryComponent('form');
export const Input = factoryComponent('input');
export const Label = factoryComponent('label');
export const Picker = factoryComponent('picker');
export const PickerView = factoryComponent('picker-view');
export const RadioGroup = factoryComponent('radio-group');
export const Radio = factoryComponent('radio');
export const Slider = factoryComponent('slider');
export const Switch = factoryComponent('switch');
export const Textarea = factoryComponent('textarea');
export const Navigator = factoryComponent('navigator');
export const Image = factoryComponent('image');
export const Video = factoryComponent('video');
export const Camera = factoryComponent('camera');
export const LivePlayer = factoryComponent('live-player');
export const LivePusher = factoryComponent('live-pusher');
export const Map = factoryComponent('map');
export const Canvas = factoryComponent('canvas');
export const OpenData = factoryComponent('open-data');
export const OfficialAccount = factoryComponent('official-account');
