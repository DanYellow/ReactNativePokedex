//
//  PlayerManager.m
//  ReactNativePokedex
//
//  Created by Jean-Louis Danielo on 02/10/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "PlayerManager.h"
#import "Player.h"

@implementation PlayerManager

RCT_EXPORT_MODULE()

- (UIView *) view {
  Player *myCustomView = [[Player alloc] initWithFrame:CGRectZero];
  
  return myCustomView;
}

RCT_EXPORT_VIEW_PROPERTY(soundPath, NSString);

@end
