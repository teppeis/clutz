declare namespace ಠ_ಠ.clutz.nested {
  enum NotNested {
  }
}
declare module 'goog:nested.NotNested' {
  import NotNested = ಠ_ಠ.clutz.nested.NotNested;
  export default NotNested;
}
declare namespace ಠ_ಠ.clutz.nested {
  enum NotNestedEither {
  }
}
declare module 'goog:nested.NotNestedEither' {
  import NotNestedEither = ಠ_ಠ.clutz.nested.NotNestedEither;
  export default NotNestedEither;
}
declare namespace ಠ_ಠ.clutz.nested {
  class PrivateC__clutz_alias {
    private noStructuralTyping_nested_PrivateC : any;
  }
}
declare module 'goog:nested.PrivateC' {
  import PrivateC = ಠ_ಠ.clutz.nested.PrivateC__clutz_alias;
  export default PrivateC;
}
declare namespace ಠ_ಠ.clutz.nested.PrivateC {
  enum Enum {
  }
}
declare module 'goog:nested.PrivateC.Enum' {
  import Enum = ಠ_ಠ.clutz.nested.PrivateC.Enum;
  export default Enum;
}
declare namespace ಠ_ಠ.clutz.nested {
  let foo__clutz_alias : ಠ_ಠ.clutz.nested.PrivateC__clutz_alias ;
}
declare module 'goog:nested.foo' {
  import foo = ಠ_ಠ.clutz.nested.foo__clutz_alias;
  export default foo;
}
declare namespace ಠ_ಠ.clutz.nested.foo {
  class Klass {
    private noStructuralTyping_nested_foo_Klass : any;
  }
}
declare module 'goog:nested.foo.Klass' {
  import Klass = ಠ_ಠ.clutz.nested.foo.Klass;
  export default Klass;
}
