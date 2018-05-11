class details extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="Go to list"
          onPress={() =>
            navigate('list', { name: 'Jane' })
          }
        />
      );
    }
  }