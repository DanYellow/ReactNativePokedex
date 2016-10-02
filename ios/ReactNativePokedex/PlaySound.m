//
//  PlaySound.m
//  ReactNativePokedex
//
//  Created by Jean-Louis Danielo on 02/10/2016.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "PlaySound.h"

@implementation PlaySound

RCT_EXPORT_MODULE();

RCT_EXPORT_METHOD(playSongForStringURL:(NSString*)string)
{
  NSURL *url = [NSURL URLWithString:@"http://danyellow.ilotreseau.net/pokedex/1.mp3"];
  NSData *soundData = [NSData dataWithContentsOfURL:url];
  AVAudioPlayer *audioPlayer = [[AVAudioPlayer alloc] initWithData:soundData error:NULL];
  //  audioPlayer.delegate = self;
  [audioPlayer play];
}

@end
