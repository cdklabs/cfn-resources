# cfn-resources

> Prints the list of resource types and logical IDs from a CloudFormation
> template.

## Installation

Install globally:

```bash
npm i -g cfn-resources
```

## Usage

```shell
$ cat my-template.json | cfn-resources
AWS::AutoScaling::AutoScalingGroup        WebServerGroup
AWS::AutoScaling::LaunchConfiguration     LaunchConfig
AWS::AutoScaling::ScalingPolicy           WebServerScaleUpPolicy
AWS::AutoScaling::ScalingPolicy           WebServerScaleDownPolicy
AWS::CloudWatch::Alarm                    CPUAlarmHigh
AWS::CloudWatch::Alarm                    CPUAlarmLow
AWS::EC2::SecurityGroup                   InstanceSecurityGroup
AWS::ElasticLoadBalancingV2::Listener     ALBListener
AWS::ElasticLoadBalancingV2::LoadBalancer ApplicationLoadBalancer
AWS::ElasticLoadBalancingV2::TargetGroup  ALBTargetGroup
AWS::SNS::Topic                           NotificationTopic
```

To print the number of resources in a template:

```shell
$ cat test/fixtures/sample.json | node lib/cli.js | wc -l
      11
```

To print only resource types:

```shell
$ cat my-template.json | cfn-resources | cut -d" " -f1 | uniq
AWS::AutoScaling::AutoScalingGroup
AWS::AutoScaling::LaunchConfiguration
AWS::AutoScaling::ScalingPolicy
AWS::CloudWatch::Alarm
AWS::EC2::SecurityGroup
AWS::ElasticLoadBalancingV2::Listener
AWS::ElasticLoadBalancingV2::LoadBalancer
AWS::ElasticLoadBalancingV2::TargetGroup
AWS::SNS::Topic
```

## Contributions

All contributions are celebrated.

## License

Distributed under the [Apache 2.0](./LICENSE) license.
