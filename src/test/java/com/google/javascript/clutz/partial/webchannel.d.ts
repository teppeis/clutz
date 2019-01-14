declare namespace ಠ_ಠ.clutz.goog.net {
  interface WebChannel {
  }
}
declare namespace ಠ_ಠ.clutz.goog.net.WebChannel {
  interface FailureRecovery {
    setFailure (a : ಠ_ಠ.clutz.goog.net.WebChannel.FailureRecovery.FailureCondition ) : ಠ_ಠ.clutz.goog.net.WebChannel.FailureRecovery.State ;
  }
}
declare namespace ಠ_ಠ.clutz.goog.net.WebChannel.FailureRecovery {
  enum FailureCondition {
    EXCEPTION = 'exception' ,
  }
  enum State {
    CLOSED = 'closed' ,
  }
}
declare module 'goog:goog.net.WebChannel' {
  import WebChannel = ಠ_ಠ.clutz.goog.net.WebChannel;
  export default WebChannel;
}
