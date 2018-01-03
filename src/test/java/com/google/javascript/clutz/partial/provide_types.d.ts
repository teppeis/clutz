declare namespace ಠ_ಠ.clutz.module$exports$partial$provide$types {
  class Class extends Class_Instance {
  }
  class Class_Instance {
    private noStructuralTyping_: any;
    foo ( ) : void ;
  }
  type Class_ForClosure = Class | null ;
  enum Enum {
    FOO ,
  }
  type Enum_ForClosure = Enum ;
  interface Interface {
    bar ( ) : void ;
  }
  type Interface_ForClosure = Interface | null ;
  type NonNullTypedef = string ;
  type NonNullTypedef_ForClosure = NonNullTypedef ;
  type NullableTypedef = string | null ;
  type NullableTypedef_ForClosure = NullableTypedef ;
}
declare module 'goog:partial.provide.types' {
  import alias = ಠ_ಠ.clutz.module$exports$partial$provide$types;
  export = alias;
}
