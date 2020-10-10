import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCardsByColumn, deleteCard } from '../../../actions/cards';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import { Col, Row } from '../../../utils/GlobalStyles';

export const CardHolder = styled(Col)`
  position: relative;
  background-color: white;
  min-height: 10rem;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15);
  margin: 1rem 0;
  padding: 1rem;
`;

export const HeaderRow = styled(Row)`
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;
export const BodyRow = styled(Row)`
  margin-bottom: 1.5rem;
`;

export const DeleteIcon = styled.div`
  position: absolute;
  height: 3rem;
  width: 3rem;
  background-color: red;
  right: 0;
  bottom: 0;
`;

const onDelete = (columnId, _id) => {
  console.log(columnId, 'props');
  console.log(_id, 'props');
  this.props.deleteCard(columnId, _id);
  // window.location.reload(false);
};

class Card extends Component {
  onDelete = (columnId, _id) => {
    console.log(columnId, 'props');
    console.log(_id, 'props');
    this.props.deleteCard(columnId, _id);
    window.location.reload(false);
  };
  render() {
    const { data, columnId } = this.props;
    // const { idx } = this.props;
    const { title, description, _id, cardId, cardNumb } = data;
    console.log(columnId, 'cId');
    return (
      <Draggable draggableId={cardId} key={cardId} index={this.props.idx}>
        {(provided, snapshot) => (
          <CardHolder
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
          >
            <HeaderRow>{title}</HeaderRow>
            <BodyRow>{description}</BodyRow>
            <DeleteIcon onClick={() => this.onDelete(columnId, _id)} />
          </CardHolder>
        )}
      </Draggable>
    );
  }
}

const mapStateToProps = state => ({
  //   auth: state.auth,
  //   boards: state.boards,
  //   columns: state.columns,
  //   cards: state.cards,
});

export default connect(mapStateToProps, { getCardsByColumn, deleteCard })(Card);
