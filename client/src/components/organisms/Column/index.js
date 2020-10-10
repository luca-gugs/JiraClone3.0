import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCardsByColumn } from '../../../actions/cards';
import styled from 'styled-components';
import { Col, Row } from '../../../utils/GlobalStyles';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card';

export const Holder = styled(Col)`
  height: 80vh;
  background-color: #f9f9f9;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
  width: 40rem;
  min-width: 40rem;
  margin: 0 2rem;
`;

export const HeaderRow = styled(Row)`
  font-weight: 500;
  font-size: 4rem;
  border-bottom: 1px solid #3b3b3b;
  justify-content: space-between;
  align-items: center;
  min-height: 4.9rem;
  padding: 0 1rem;
  box-sizing: border-box;
`;

export const Header = styled.div`
  font-weight: 500;
  font-size: 4rem;
`;

export const CardList = styled.div`
  padding: 1.5rem;
  transition: background-color 0.5s ease;
  background-color: ${props => (props.isDraggingOver ? 'skyblue' : null)};
`;

class Column extends Component {
  state = {
    changeTitleActive: false,
  };

  changeTitle = () => {
    this.setState({
      changeTitleActive: !this.state.changeTitleActive,
    });
  };
  render() {
    const columnData = this.props.column[0];
    const title = columnData && columnData.title;
    const columnId = columnData && columnData.columnId;
    const _id = columnData && columnData._id; //5efd3e5c0814c206fd390de6
    console.log(_id, 'check value');
    return (
      <Holder>
        <HeaderRow>
          {!this.state.changeTitleActive && <Header>{title}</Header>}
        </HeaderRow>
        <Droppable droppableId={_id}>
          {(provided, snapshot) => (
            <CardList
              ref={provided.innerRef}
              {...provided.droppableProps}
              isDraggingOver={snapshot.isDraggingOver}
            >
              {this.props.passedCards.map((elm, idx) => {
                return <Card data={elm} columnId={_id} idx={idx} key={idx} />;
              })}
              {provided.placeholder}
            </CardList>
          )}
        </Droppable>
      </Holder>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
  columns: state.columns,
  cards: state.cards,
});

export default connect(mapStateToProps, { getCardsByColumn })(Column);
