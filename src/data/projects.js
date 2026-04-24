export const projects = [
  {
    slug: 'iac-security-terraform-aws',
    title: 'Infrastructure as Code Security',
    subtitle: 'Terraform & AWS Attack Surface Discovery',
    shortDescription:
      'Automated Terraform file analysis using rule-based engines to detect misconfigurations and map AWS attack paths using AWS SDK.',
    description: `This project focuses on securing cloud infrastructure by automatically analyzing Terraform configuration files against a predefined ruleset. It identifies vulnerable points in AWS environments and determines attack paths using the AWS SDK.

The tool performs static analysis on IaC files, cross-references findings with AWS resource metadata, and generates an attack graph that highlights potential lateral movement paths an adversary could exploit.

Key capabilities include detection of over-privileged IAM roles, publicly exposed S3 buckets, unencrypted storage, missing VPC flow logs, and insecure security group rules.`,
    tags: ['Terraform', 'AWS', 'Security', 'IaC', 'Python', 'AWS SDK'],
    image: '/images/iac-security.jpg',
    color: '#f0f0f0',
  },
  {
    slug: 'deception-cloning-honeypot',
    title: 'Deception Through Cloning',
    subtitle: 'Against Web Site Attacks',
    shortDescription:
      'Docker-based web application cloning that redirects attackers to honeypots. Intelligence gathered from honeypot interactions is surfaced to defenders in real-time.',
    description: `This project implements a deception-based defense strategy by cloning web applications inside Docker containers and redirecting attack traffic to honeypots. When an attacker targets the real application, they are seamlessly redirected to a decoy environment.

All interactions with the honeypot are logged, analyzed, and presented to security teams through a dashboard. The intelligence gathered includes attacker IPs, payloads, session behavior, and attempted exploits — providing actionable threat intelligence without exposing the real system.

The architecture is designed to be transparent to attackers while giving defenders deep visibility into adversary tactics, techniques, and procedures (TTPs).`,
    tags: ['Docker', 'Honeypot', 'Deception', 'Cybersecurity', 'Python', 'Threat Intelligence'],
    image: '/images/deception.jpg',
    color: '#e8e8e8',
  },
];
