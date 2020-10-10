import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import { getCardsByColumn, deleteCard } from '../../../actions/cards';
import { Draggable } from 'react-beautiful-dnd';
import DeleteImg from '../../../assets/trash-can.png';

import { CardHolder, HeaderRow, BodyRow, DeleteIcon } from './styles';

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
            <DeleteIcon
              onClick={() => this.onDelete(columnId, _id)}
              src={DeleteImg}
            />
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
