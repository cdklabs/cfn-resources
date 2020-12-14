import { getResources, getResourcesFromFile } from '../src';

test('getResourceTypes', () => {
  const types = getResources({
    Resources: {
      YourTopic: {
        Type: 'AWS::SNS::Topic',
      },
      FooBar: {
        Type: 'Foo::Bar',
      },
      HelloWorld: {
        Type: 'AWS::S3::Bucket',
      },
      MyTopic: {
        Type: 'AWS::SNS::Topic',
      },
    },
  });

  expect(types).toMatchInlineSnapshot(`
    Array [
      "AWS::S3::Bucket HelloWorld",
      "AWS::SNS::Topic YourTopic",
      "AWS::SNS::Topic MyTopic",
      "Foo::Bar        FooBar",
    ]
  `);
});

test('getResourceTypesFromFile', () => {
  const types = getResourcesFromFile(`${__dirname}/fixtures/sample.json`);
  expect(types).toMatchInlineSnapshot(`
    Array [
      "AWS::AutoScaling::AutoScalingGroup        WebServerGroup",
      "AWS::AutoScaling::LaunchConfiguration     LaunchConfig",
      "AWS::AutoScaling::ScalingPolicy           WebServerScaleUpPolicy",
      "AWS::AutoScaling::ScalingPolicy           WebServerScaleDownPolicy",
      "AWS::CloudWatch::Alarm                    CPUAlarmHigh",
      "AWS::CloudWatch::Alarm                    CPUAlarmLow",
      "AWS::EC2::SecurityGroup                   InstanceSecurityGroup",
      "AWS::ElasticLoadBalancingV2::Listener     ALBListener",
      "AWS::ElasticLoadBalancingV2::LoadBalancer ApplicationLoadBalancer",
      "AWS::ElasticLoadBalancingV2::TargetGroup  ALBTargetGroup",
      "AWS::SNS::Topic                           NotificationTopic",
    ]
  `);
});
