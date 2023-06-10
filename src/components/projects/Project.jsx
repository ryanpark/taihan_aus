import React, { Fragment } from "react";
import styled from "styled-components";
import MediaQuery from "react-responsive";
import Modal from "react-modal";

import { screen, color } from "../../global/constant";
import CloseButtonSVG from "../../global/CloseButton";

const List = styled.div`
  position: relative;
  cursor: pointer;
  display: inline-flex;
  @media ${screen.lgDown} {
    display: block;
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }

  @media ${screen.mdUp} {
    img {
      width: auto;
    }
  }
`;

const Paragraph = styled.p`
  position: absolute;
  bottom: 20px;
  left: 20px;
  line-height: 26px;
  background: ${color.blue};
  padding: 10px;
`;

const Description = styled.p`
  line-height: 26px;
`;

const Title = styled.p`
  line-height: 26px;
  margin-bottom: 15px;
`;

const ContentWrapper = styled.div`
  display: block;

  img {
    height: auto;
    width: 100%;
  }

  @media ${screen.lgUp} {
    display: flex;

    img {
      height: auto;
      width: auto;
    }
  }
`;

Modal.setAppElement("#root");

export default class Project extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    const SelectedContent = styled.div`
      margin: 20px;

      span {
        text-decoration: none !important;
      }

      @media ${screen.mdUp} {
        margin-top: 0px;
        margin-bottom: 0px;
      }
    `;

    const CloseButton = styled.div`
      text-align: right;
      cursor: pointer;
      right: 10px;

      svg {
        width: 40px;
        fill: white;
      }

      @media ${screen.mdUp} {
        margin: 0px;
        position: absolute;
      }
    `;

    const content = () => (
      <SelectedContent>
        <Title>{this.props.title} </Title>
        <Description>{this.props.description} </Description>
      </SelectedContent>
    );
    return (
      <Fragment>
        <List onClick={this.openModal}>
          <Fragment>
            <Paragraph>{this.props.title}</Paragraph>
            <img alt="" src={this.props.selectedSrc} />
          </Fragment>
        </List>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Example Modal"
          style={{
            overlay: {
              zIndex: 999999
            },
            content: {
              background: "#003084"
            }
          }}
        >
          <CloseButton onClick={this.closeModal}>
            <CloseButtonSVG />
          </CloseButton>
          <ContentWrapper>
            <img alt="" src={this.props.selectedSrc} />
            {content()}
          </ContentWrapper>
        </Modal>
        <MediaQuery query={screen.smDown}>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            contentLabel="Example Modal"
            style={{
              overlay: {
                zIndex: 999999
              },
              content: {
                background: "#003084",
                left: "0px",
                right: "0px",
                top: "0px",
                bottom: "0px"
              }
            }}
          >
            <CloseButton onClick={this.closeModal}>
              <CloseButtonSVG />
            </CloseButton>
            <ContentWrapper>
              <img alt="" src={this.props.selectedSrc} />
              {content()}
            </ContentWrapper>
          </Modal>
        </MediaQuery>
      </Fragment>
    );
  }
}
