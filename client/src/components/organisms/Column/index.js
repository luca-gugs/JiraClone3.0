import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getCardsByColumn } from '../../../actions/cards';
import { Droppable } from 'react-beautiful-dnd';
import Card from '../Card';
import CreateNewCard from '../CreateNewCard';
import EditColumn from '../EditColumn';
import ColumnNameEditInput from '../../atoms/ColumnNameEditInput';

import { Holder, HeaderRow, Header, CardList } from './styles';

class Column extends Component {
  state = {
    changeTitleActive: false,
  };

  render() {
    const columnData = this.props.column[0];
    const title = columnData && columnData.title;
    const _id = columnData && columnData._id;
    const boardId = this.props.boardId;

    const changeTitleActiveState = () => {
      this.setState({
        changeTitleActive: !this.state.changeTitleActive,
      });
    };

    return (
      <Holder>
        <HeaderRow>
          {!this.state.changeTitleActive && <Header>{title}</Header>}
          {this.state.changeTitleActive && (
            <ColumnNameEditInput
              columnId={_id}
              currentTitle={title}
              changeTitleActiveState={changeTitleActiveState}
            />
          )}
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
        <CreateNewCard id={_id} />
        <EditColumn
          changeTitleActiveState={changeTitleActiveState}
          columnId={_id}
          boardId={boardId}
        />
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
