import React from 'react';
import { List, message, Avatar, Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import './index.less';

const axios = require('axios');

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class InfiniteList extends React.Component {
    state = {
        data: [],
        loading: false,
        hasMore: true,
    }
    getData = (callback) => {
      axios.get(fakeDataUrl).then(callback);
    }
    componentDidMount() {
        this.getData((res) => {
            this.setState({
              data: res.data.results,
            });
        });
    }
    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
          loading: true,
        });
        if (data.length > 14) {
          message.warning('Infinite List loaded all');
          this.setState({
            hasMore: false,
            loading: false,
          });
          return;
        }
        this.getData((res) => {
          data = data.concat(res.data.results);
          this.setState({
            data,
            loading: false,
          });
        });
    }
    renderListItem = (item) => (
        <List.Item key={item.id}>
            <List.Item.Meta
            title={<a href="https://ant.design">{item.name.last}</a>}
            description={item.email}
            />
            <div>Content</div>
        </List.Item>
    )

    render() {
        return (
          <div className="infiniteList-infinite-container">
            <InfiniteScroll
              initialLoad={false}
              pageStart={0}
              loadMore={this.handleInfiniteOnLoad}
              hasMore={!this.state.loading && this.state.hasMore}
              useWindow={false}
            >
              <List
                locale={ {emptyText: '加载中...'} }
                dataSource={this.state.data}
                renderItem={this.renderListItem}
              >
                {this.state.loading && this.state.hasMore && (
                  <div className="infiniteList-loading-container">
                    <Spin />
                  </div>
                )}
              </List>
            </InfiniteScroll>
          </div>
        );
    }
}

export default InfiniteList;
