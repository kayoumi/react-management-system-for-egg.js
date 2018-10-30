import React from 'react';
import { connect } from 'react-redux';
import { List, Spin, Button } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import API from '../../utils/api';
import helper from '../../utils/helper';
import { info } from '../../config';
import { articleNofresh } from '../../actions';
import './index.less';

const pageSize = 12;

class InfiniteList extends React.Component {
    state = {
      data: [],
      loading: false,
      hasMore: true,
      page: 0
    }
    getData = (callback, pageStart) => {
      const page = pageStart ? pageStart : this.state.page + 1;
      this.setState({
        page: page,
      });
      const author = localStorage.getItem('nickname') || '';
      setTimeout(function() {
        console.log('author:', author);
        if(author == '') {
          API.getAllArticle({ page, pageSize }).then(callback);
        } else {
          console.log('按昵称搜索开始');
          API.getAllArticle({ page, pageSize, author }).then(callback);
        }
      }, 1000);
    }
    componentDidUpdate(prevProps) {
      if (this.props.needRefresh === true && this.props.needRefresh !== prevProps.needRefresh) {
        this.props.articleNofresh();
        this.getData((res) => {
          this.setState({
            data: res.data.data,
            hasMore: true,
            page: 1
          });
        }, 1);
      }
    }
    componentDidMount() {
      this.getData((res) => {
        console.log(res.data.data);
        this.setState({
          data: res.data.data,
        });
      });
      console.log('渲染结束！！！');
    }
    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
          loading: true,
        });
        this.getData((res) => {
          console.log(res.data.data);
          if(res.data.data.length == 0) {
            info('文章已经全部加载完毕！');
            this.setState({
              hasMore: false,
              loading: false,
            });
            return;
          } else {
            data = data.concat(res.data.data);
            this.setState({
              data,
              loading: false,
            });
          }
        });
    }
    renderListItem = (item) => (
        <List.Item key={item._id}>
            <List.Item.Meta
            title={<a href="https://ant.design">{item.title}</a>}
            description={item.summary}
            />
            <div>{ helper.formatTime(item.createAt) }</div>
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
              useWindow={true}
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

const mapStateToProps = state => ({
  needRefresh: state.status.artRefresh
});

export default connect(
  mapStateToProps,
  { articleNofresh }
)(InfiniteList);

