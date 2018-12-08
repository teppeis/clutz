declare namespace ಠ_ಠ.clutz.shadowed {
  class Foo__clutz_alias {
    private noStructuralTyping_shadowed_Foo : any;
    foo : ಠ_ಠ.clutz.shadowed.Foo__clutz_alias ;
  }
}
declare module 'goog:shadowed.Foo' {
  import Foo = ಠ_ಠ.clutz.shadowed.Foo__clutz_alias;
  export default Foo;
}
declare namespace ಠ_ಠ.clutz.shadowed.Foo {
  enum Enum {
    A = 'a' ,
  }
}
declare module 'goog:shadowed.Foo.Enum' {
  import Enum = ಠ_ಠ.clutz.shadowed.Foo.Enum;
  export default Enum;
}
