import React from 'react';
import SkillRow from "@/components/SkillRow";
import SectionHeader from "@/components/SectionHeader";

export default function SkillsSection() {
  return (
    <section id="skills" className="p-8">
      <div className="flex">
        <div className="w-0 lg:w-1/5"></div>
        <div className="w-full lg:w-3/5 bg-white">
          <SectionHeader title="Skills"/>
          <h2 className="text-xl">Languages</h2>
          <SkillRow skills={[
            "Java", "Python", "Kotlin", "Scala", "Javascript (ES6)", "Typescript", "C", "C++", "Ruby", "Go", "PHP", "HTML", "CSS", "Shell"
          ]}/>
          <br/>
          <br/>
          <h2 className="text-xl">Frameworks</h2>
          <SkillRow skills={[
            "Spring", "Django", "Flask", "GraphQL", "Rails", "Node.js", "React", "Redux", "Android SDK", "Angular", "Reactive (RxJava, Reactor)", "JUnit"
          ]}/>
          <br/>
          <br/>
          <h2 className="text-xl">AWS</h2>
          <SkillRow skills={[
            "S3", "DynamoDB", "EC2", "Lambda", "CloudFormation", "CDK", "IAM", "Cognito", "API Gateway", "ECS", "Step Functions", "SNS", "SQS", "KMS", "Kinesis", "CloudWatch"
          ]}/>
          <br/>
          <br/>
          <h2 className="text-xl">Infrastructure</h2>
          <SkillRow skills={[
            "Docker", "Terraform", "Kubernetes", "Redis", "Helm", "Prometheus", "OpenTelemetry", "JVM", "Honeycomb", "Jenkins", "Postgres", "Sentry", "MySQL", "Airflow", "Gradle", "Protobuf"
          ]}/>
        </div>
        <div className="w-0 lg:w-1/5"></div>
      </div>
    </section>
);
}