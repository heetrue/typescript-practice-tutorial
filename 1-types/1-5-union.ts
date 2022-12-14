{
  /**
   * Union Types: OR
   */
  type Direction = 'left' | 'right' | 'up' | 'down';
  function move(direction: Direction) {
    console.log(direction);
  }
  move('down');

  type TileSize = 8 | 16 | 32;
  const tile: TileSize = 16;

  // ๐ TODO: function: login -> success, fail
  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailState = {
    reason: string;
  };

  type LoginState = SuccessState | FailState;

  // function login(id: string, password: string): Promise<LoginState> {
  function login(): LoginState {
    return {
      response: {
        body: 'logged in!',
      },
    };
  }

  // ๐ printLoginState(state: LoginState)
  // success -> ๐ body
  // fail -> ๐ญ reason
  function loginState(state: LoginState) {
    if ('response' in state) {
      // state์ response๊ฐ ์๋ค๋ฉด
      console.log(`๐ ${state.response.body}`);
    } else {
      console.log(`๐ญ ${state.reason}`);
    }
  }
}
