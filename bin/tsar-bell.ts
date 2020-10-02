#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { TsarBellStack } from '../lib/tsar-bell-stack';

const app = new cdk.App();
new TsarBellStack(app, 'TsarBellStack');
