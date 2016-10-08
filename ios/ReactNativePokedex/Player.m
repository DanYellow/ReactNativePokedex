//
//  Player.m
//  ReactNativePokedex
//
//  Created by Jean-Louis Danielo on 02/10/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "Player.h"

@implementation Player

- (id)initWithFrame:(CGRect)frame {
  self = [super initWithFrame:frame];
  if (self) {
    CGRect screenRect = [[UIScreen mainScreen] bounds];
    CGFloat screenWidth = screenRect.size.width;
    
    self.frame = CGRectMake(frame.origin.x, frame.origin.y, screenWidth, frame.size.height);
    self.backgroundColor = [UIColor purpleColor];
    
    UIButton *playButton = [UIButton buttonWithType:UIButtonTypeCustom];
    playButton.frame = CGRectMake(90, 0, 90, 50);
    [playButton setTitle:@"Play" forState:UIControlStateNormal];
    [playButton setTitleColor:[UIColor blackColor] forState:UIControlStateNormal];
    [playButton addTarget:self action:@selector(playSound) forControlEvents:UIControlEventTouchUpInside];
//    playButton.backgroundColor = [UIColor redColor];
    [self addSubview:playButton];
    
    progressDurationView = [[UIView alloc] initWithFrame:CGRectMake(0, 75, screenWidth, 5)];
    progressDurationView.backgroundColor = [UIColor purpleColor];
    progressDurationView.layer.anchorPoint = CGPointMake(0.0, 0.5);
    progressDurationView.transform = CGAffineTransformMakeScale(0.0, 1.0);
   
    [self addSubview:progressDurationView];
    
//    audioPlayerTimer = [NSTimer scheduledTimerWithTimeInterval:.5 target:self selector:@selector(songPlaying) userInfo:nil repeats:YES];
  }
  
  
  return self;
}

-(void) didMoveToSuperview {
  NSURL *url = [NSURL URLWithString:_soundPath];
  NSData *soundData = [NSData dataWithContentsOfURL:url];
  audioPlayer = [[AVAudioPlayer alloc] initWithData:soundData error:NULL];
  audioPlayer.delegate = self;
  [audioPlayer prepareToPlay];
  
}

- (void) playSound {
  [audioPlayer play];
  
//  [audioPlayerTimer fire];

  progressDurationView.transform = CGAffineTransformMakeScale(0.15, 1);
}

- (void) songPlaying {
  NSLog(@"%f %f", audioPlayer.duration, audioPlayer.currentTime);
} 

- (void)audioPlayerDidFinishPlaying:(AVAudioPlayer *)player successfully:(BOOL)flag {
  [audioPlayerTimer invalidate];
}

@end
