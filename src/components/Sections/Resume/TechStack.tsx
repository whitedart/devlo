import React, { FC } from 'react';
import { Col, Row } from 'react-bootstrap';
import { DiGit, DiJavascript1, DiNodejs, DiReact } from 'react-icons/di';
import { FaAws } from 'react-icons/fa';
import { 
  SiCloudflare,
  SiCss3,
  SiDart,
  SiFirebase,
  SiFlutter,
  SiGetx,
  SiHono,
  SiHtml5,
  SiJson,
  SiNextdotjs,
 
  SiPython,
  SiSqlite,
 
  SiTypescript, 
} from 'react-icons/si';

const Techstack: FC = () => {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px', display: 'flex', flexWrap: 'wrap', marginLeft: '-50px' }}>
      
      <Col className="tech-icons" md={2} xs={4}>
        <SiFlutter title="Flutter" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiDart title="Dart" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiFirebase title="Firebase" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiSqlite title="Sqlite" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiJson title="Json" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiGetx title="Getx" />
      </Col>
 
      <Col className="tech-icons" md={2} xs={4}>
        <SiPython title="Python" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiCloudflare title="Cloudflare" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiHono title="Hono Framework" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiHtml5 title="Html" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiCss3 title="CSS" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiBootstrap title="Bootstrap" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiAntdesign title="Ant Design" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <DiSass title="Saas" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiTailwindcss title="Tailwind" />
      </Col> */}
      <Col className="tech-icons" md={2} xs={4}>
        <DiJavascript1 title="Javascript" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <DiReact title="React" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiNextdotjs title="Next" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiAngular title="Angular" />
      </Col> */}
      <Col className="tech-icons" md={2} xs={4}>
        <SiTypescript title="Typescript" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiRedux title="Redux" />
      </Col> */}
      <Col className="tech-icons" md={2} xs={4}>
        <DiNodejs title="Node" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiWebpack title="Webpack" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiBabel title="Babel" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <SiGraphql title="Graphql" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <DiMongodb title="Mongodb" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <TbBrandGolang title="Golang" />
      </Col> */}
      <Col className="tech-icons" md={2} xs={4}>
        <DiGit title="Git" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <FaJenkins title="Jenkins" />
      </Col> */}
      <Col className="tech-icons" md={2} xs={4}>
        <FaAws title="Aws" />
      </Col>
      {/* <Col className="tech-icons" md={2} xs={4}>
        <FaAsure title="Aws" />
      </Col> */}
      {/* <Col className="tech-icons" md={2} xs={4}>
        <FaDocker title="Docker" />
      </Col> */}
    </Row>
  );
};

export default Techstack;
