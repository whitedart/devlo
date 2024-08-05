import React, { FC } from 'react';

import { Col, Row } from 'react-bootstrap';
import {
  SiAndroidstudio,
  SiLinux,
  SiMacos,
  SiPostman,
  SiSwagger,
  SiVisualstudiocode,
  SiWindows,
  SiXcode,
} from 'react-icons/si';

const Tools: FC = () => {
  return (
    <Row
      style={{ justifyContent: 'center', paddingBottom: '50px', display: 'flex', flexWrap: 'wrap', marginLeft: '-50px' }}
    >
      <Col className="tech-icons" md={2} xs={4}>
        <SiMacos title="Mac OS" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiVisualstudiocode title="VS Code" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiXcode title="X Code" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiAndroidstudio title="Android Studio" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiWindows title="Windows" />
      </Col>
     
      <Col className="tech-icons" md={2} xs={4}>
        <SiLinux title="Linux" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiPostman title="Postman" />
      </Col>
      <Col className="tech-icons" md={2} xs={4}>
        <SiSwagger title="Swagger" />
      </Col>
    </Row>
  );
};

export default Tools;
