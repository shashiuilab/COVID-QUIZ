import React from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import QuestionCount from '../components/QuestionCount';
import AnswerOption from '../components/AnswerOption';
import { CSSTransitionGroup } from 'react-transition-group';
import { Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import { Alert } from 'reactstrap';

function Quiz(props) {
    function renderAnswerOptions(key) {
        return (
          <AnswerOption
            key={key.content}
            answerContent={key.content}
            answerType={key.type}
            answer={props.answer}
            questionId={props.questionId}
            onAnswerSelected={props.onAnswerSelected}
          />
        );
      }
    return (
      <CSSTransitionGroup
    className="container"
    component="div"
    transitionName="fade"
    transitionEnterTimeout={800}
    transitionLeaveTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
  >
      <Container>
      <Row>
          <Col>
            <h2 className="lead">Here is a simple quiz that helps you assess your symptoms and tell you if you are COVID positive or not. 
            Please answer the following questions with atmost accurary for accurate results.</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <QuestionCount
              counter={props.questionId}
              total={props.questionTotal}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Alert color="success">
              <Question content={props.question} />
            </Alert>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="answerOptions">
            {props.answerOptions.map(renderAnswerOptions)}
          </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color="primary" onClick={props.onSubmitClicked}>Submit</Button>
          </Col>
        </Row>
      </Container>
      </CSSTransitionGroup>
    );
  }
  
  Quiz.propTypes = {
    answer: PropTypes.string.isRequired,
    answerOptions: PropTypes.array.isRequired,
    counter: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionId: PropTypes.number.isRequired,
    questionTotal: PropTypes.number.isRequired,
    onAnswerSelected: PropTypes.func.isRequired
  };
  
  export default Quiz;