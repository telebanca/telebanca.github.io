const banksName = {
    BANDEC:'BANDEC',
    BPA:'BPA',
    BM:'BM'
  }
  
  const operation = [
    {
      //autenticarse BPA
      title:"AUTENTICARSE BPA",
      description:"Autenticarse en Banco Popular de Ahorro",
      link:"tel:*444*40*01%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //autenticarse BANDEC
      title:"AUTENTICARSE BANDEC",
      description:"Autenticarse en Banco de Crédito y Comercio",
      link:"tel:*444*40*02%23",
      icon:"",
      banks:[banksName.BANDEC]
    },
    {
      //autenticarse BM
      title:"AUTENTICARSE BM",
      description:"Autenticarse en Banco Metropolitano",
      link:"tel:*444*40*03%23",
      icon:"",
      banks:[banksName.BM]
    },
    {
      //CERRAR SESION BPA
      title:"Cerrar sesión",
      description:"Cierra la sesión actual",
      link:"tel:*444*70%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },

    {
      //transferencia
      title:"Transferencia",
      description:"Transferir saldo a otra cuenta o tarjeta",
      link:"tel:*444*45%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Electricidad
      title:"Electricidad",
      description:"Pago de la electriciad",
      link:"tel:*444*41%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Telefono 
      title:"Teléfono",
      description:"Pago de factura telefónica",
      link:"tel:*444*42%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    //TODO: ONAT 
    {
      //Onat
      title:"ONAT",
      description:"Pago de la ONAT",
      link:"tel:*444*43%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA]
    },
    {
      //AGUA
      title:"Agua",
      description:"Pago a Aguas de La Habana",
      link:"tel:*444*51%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Recargar movil
      title:"Recarga móvil",
      description:"Recarga de saldo fijo línea Cubacel",
      link:"tel:*444*54%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Recargar nauta
      title:"Recargar nauta",
      description:"Recarga de cuenta nauta nacional o internacional",
      link:"tel:*444*59%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Giro Postal
      title:"Giro postal",
      description:"Envío o consulta de giro postal",
      link:"tel:*444*64%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Gas
      title:"Gas",
      description:"Pago de factura de gas",
      link:"tel:*444*67%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Cuenta Joven Club
      title:"Cuenta Joven Club",
      description:"Recarga Cuenta Joven Club",
      link:"tel:*444*93%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Cuota nauta hogar
      title:"Cuota Nauta Hogar",
      description:"Paga cuota Nauta Hogar",
      link:"tel:*444*84%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Deuda nauta hogar
      title:"Deuda Nauta Hogar",
      description:"Paga deuda Nauta Hogar",
      link:"tel:*444*86%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Recarga Tarjeta Propia
      title:"Tarjeta Propiar",
      description:"Recarga Tarjeta Propia",
      link:"tel:*444*77%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Deposito a plazo fijo
      title:"Depósito a plazo fijo",
      description:"Apertura de depósito a plazo fijo",
      link:"tel:*444*81%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cerrar deposito a plazo fijo
      title:"Cerrar depósito a plazo fijo",
      description:"Cierre de depósito a plazo fijo",
      link:"tel:*444*82%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Pagar Multa
      title:"Multa",
      description:"Pagar Multa",
      link:"tel:*444*44%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },

    {
      //Consulta saldo
      title:"Consultar saldo",
      description:"Consultar saldo de la tarjeta",
      link:"tel:*444*46%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Consultar servios
      title:"Consultar servios",
      description:"Consultar factura del servicio",
      link:"tel:*444*47%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Últimas operaciones
      title:"Últimas operaciones",
      description:"Consultar últimas 10 operaciones",
      link:"tel:*444*48%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Consultar Límite tarjeta
      title:"Consultar Límite tarjeta",
      description:"Consultar operaciones y extracción de saldo posible en un día",
      link:"tel:*444*62%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    // {
    //   //Cambiar Límite tarjeta
    //   title:"Cambiar Límite tarjeta",
    //   description:"Cambiar límite de operaciones y de extracción de saldo posible en un día",
    //   link:"tel:*444*61%23",
    //   icon:"",
    //   banks:[banksName.BANDEC,banksName.BPA]
    // },
    {
      //Consultar todas las cuentas
      title:"Consultar todas las cuentas",
      description:"Consultar todas las cuentas a la vez",
      link:"tel:*444*58%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Consultar giro postal
      title:"Consultar giro postal",
      description:"Consultar todas las cuentas a la vez",
      link:"tel:*444*65%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Localizar Transferencia
      title:"Localizar Transferencia",
      description:"Localizar Transferencia",
      link:"tel:*444*73%23",
      icon:"",
      banks:[banksName.BM]
    },
    {
      //Consultar Créditos
      title:"Consultar Créditos",
      description:"Consultar créditos bancarios",
      link:"tel:*444*72%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Tipo de Cambio
      title:"Tipo de Cambio",
      description:"Tipo de Cambio",
      link:"tel:*444*85%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    {
      //Cambio Ĺimite Tarjeta
      title:"Cambio Ĺimite Tarjeta",
      description:"Cambio Ĺimite de saldo a extraer en un día",
      link:"tel:*444*61%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BPA,banksName.BM]
    },
    // {//TODO:
    //   //registrar tarjeta
    //   title:"no funciona Registrar Tarjeta",
    //   description:"No Funciona Registrar Tarjeta BPA",
    //   link:"tel:*444*49*01*1234567890123456%23",
    //   icon:"",
    //   banks:[banksName.BPA]
    // },
    {
      //Eliminar registro
      title:"Eliminar Registro",
      description:"Eliminar Registro",
      link:"tel:*444*68*01%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Eliminar registro
      title:"Eliminar Registro",
      description:"Eliminar Registro",
      link:"tel:*444*68*02%23",
      icon:"",
      banks:[banksName.BANDEC]
    },
    {
      //Eliminar registro
      title:"Eliminar Registro",
      description:"Eliminar Registro",
      link:"tel:*444*68*03%23",
      icon:"",
      banks:[banksName.BM]
    },
    {
      //Servicios Contratados
      title:"Servicios Contratados",
      description:"Lista los Servicios Contratados",
      link:"tel:*444*52%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC,banksName.BM]
    },
    {
      //Amortizar Creditos
      title:"Amortizar Créditos",
      description:"Amortizar Créditos",
      link:"tel:*444*55%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC]
    },
    {
      //reimpresión de tarjeta
      title:"Reimpresión de Tarjeta",
      description:"Reimpresión de Tarjeta Magnética",
      link:"tel:*444*74%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC,banksName.BM]
    },
    {
      //Información de tarjeta de red
      title:"Información de tarjeta de red",
      description:"Consulta información de tarjeta de red",
      link:"tel:*444*78%23",
      icon:"",
      banks:[banksName.BANDEC]
    },
    {
      //Pérdida del PIN
      title:"Pérdida del PIN",
      description:"Pérdida del PIN de Tarjeta Magnética",
      link:"tel:*444*83%23",
      icon:"",
      banks:[banksName.BPA]
    },
    {
      //Cambiar clave
      title:"Cambiar clave",
      description:"Cambiar clave de acceso",
      link:"tel:*444*69%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC,banksName.BM]
    },
    {
      //Asosciar cuentas
      title:"Asosciar cuentas Cambio Tarjeta a Operar",
      description:"Vincular otra cuenta bancaria",
      link:"tel:*444*60%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC,banksName.BM]
    },
    {
      //Actualizar Cuenta
      title:"Actualizar Cuenta",
      description:"Actualizar cuentas asociadas a su tarjeta telebanca",
      link:"tel:*444*53%23",
      icon:"",
      banks:[banksName.BM]
    },
    {
      //Apertura cuenta usd
      title:"Apertura cuenta en USD",
      description:"Apertura de cuenta USD con respaldo MLC",
      link:"tel:*444*76%23",
      icon:"",
      banks:[banksName.BANDEC,banksName.BM]
    },
    {
      //Cambio de PIN Multibanca
      title:"Cambio de PIN Multibanca",
      description:"Cambio del PIN de la tarjeta Multibanca",
      link:"tel:*444*57%23",
      icon:"",
      banks:[banksName.BPA, banksName.BANDEC]
    },
    {
      //Ayuda
      title:"Ayda",
      description:"Lista de operaciones permitidas",
      link:"tel:*444*71%23",
      icon:"",
      banks:[banksName.BPA,banksName.BANDEC,banksName.BM]
    }

  ];