import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as TsarBell from '../lib/tsar-bell-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new TsarBell.TsarBellStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
