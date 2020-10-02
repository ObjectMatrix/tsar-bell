import cdk = require('@aws-cdk/core');
/**
 *  package contains primitives for setting up networking and instances
 */
import ec2 = require('@aws-cdk/aws-ec2');

export class TsarBellStack extends cdk.Stack {
  get availabilityZones(): string[] {
    return ['us-east-1'];
  }
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new ec2.Vpc(this, "Vpc", {
      subnetConfiguration: [
        {
          // support 256 IP address (2^(32-24))
          cidrMask: 24,
          /**
           * Screen all external traffic
           * segment the incoming traffic based on the subnets to which
           * these packets are destined and route these packets through
           * appropriate network appliances.
           */
          name: 'Ingress',
          //  Isolated Subnets do not route traffic to the Internet (in this VPC).
          //  other types: public, private
          subnetType: ec2.SubnetType.PUBLIC,
          // Controls if subnet IP space needs to be reserved
          reserved: false
        }, {
          cidrMask: 24,
          name: 'public',
          subnetType: ec2.SubnetType.PUBLIC,
          reserved: false
        }
      ]
    });
  }
}