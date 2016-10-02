//
//  Player.h
//  ReactNativePokedex
//
//  Created by Jean-Louis Danielo on 02/10/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import <UIKit/UIKit.h>

#import <AVFoundation/AVFoundation.h>

@interface Player : UIView <AVAudioPlayerDelegate> {
  AVAudioPlayer *audioPlayer;
  UIView *progressDurationView;
  
  NSTimer *audioPlayerTimer;
}

@property (atomic, strong) NSString *soundPath;

@end
