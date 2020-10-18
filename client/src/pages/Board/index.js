import React, { useEffect, useState, Component } from 'react';
import { connect } from 'react-redux';
import { getColumnsByBoard } from '../../actions/columns';
// import { clearCol } from '../../actions/columns';
import styled from 'styled-components';
import { getAllBoards } from '../../actions/boards';
import {
  getCardsByColumn,
  reorderCards,
  clearCards,
  clearCol,
} from '../../actions/cards';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from '../../components/organisms/Column';
import { Row, PageWrapper } from '../../utils/GlobalStyles';
import { StyledRow } from './styles';
import CreateNewColumn from '../../components/organisms/CreateNewColumn';
class Board extends Component {
  state = {
    initialCards: false,
    initialLoad: false,
  };

  componentDidMount() {
    this.props.clearCards();
    this.props.clearCol();
    this.props.getColumnsByBoard({ id: this.props.match.params.id });
    this.setState({ initialLoad: true });
  }
  componentDidUpdate(prevProps) {
    if (this.props.columns.currentColumns.columns && !this.state.initialCards) {
      this.props.getCardsByColumn(this.props.columns.currentColumns.columns);
      this.setState({ initialCards: true });
    }
  }

  onDragEnd = result => {
    const { destination, draggableId, source, type } = result;
    const payload = {
      destination,
      draggableId,
      source,
    };
    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    this.props.reorderCards({
      ...payload,
      columns: this.props.columns.currentColumns.columns,
    });
    return;
  };

  render() {
    const { currentColumns } = this.props.columns;
    const { board, columns } = currentColumns;
    const boardId = board && board._id;

    const cardsKey = this.props.cards.cards?.cards;
    return (
      <PageWrapper>
        <div style={{ minHeight: '100vh' }}>
          <StyledRow>
            <DragDropContext onDragEnd={this.onDragEnd}>
              {board &&
                board.columnOrder.map((columnId, index) => {
                  const columnData = [];
                  columns.map(elm => {
                    if (elm.columnId === columnId) {
                      columnData.push(elm);
                    }
                  });

                  const test = this.props.cards.cards?.cards;
                  const cardData = [];
                  columnData.length > 0 &&
                    columnData[0].cardIds.map(elm => {
                      return this.props.cards.cards?.cards.map(elm2 => {
                        elm2.filter(function (obj) {
                          if (obj.cardId === elm) {
                            cardData.push(obj);
                          }
                        });
                      });
                    });
                  return (
                    <Column
                      column={columnData}
                      passedCards={cardData}
                      boardId={boardId}
                      key={index}
                    />
                  );
                })}
            </DragDropContext>
            <CreateNewColumn boardId={boardId} />
          </StyledRow>
        </div>
      </PageWrapper>
    );
  }
}
const mapStateToProps = state => ({
  auth: state.auth,
  boards: state.boards,
  columns: state.columns,
  cards: state.cards,
});

export default connect(mapStateToProps, {
  getAllBoards,
  getColumnsByBoard,
  getCardsByColumn,
  reorderCards,
  clearCards,
  clearCol,
})(Board);
