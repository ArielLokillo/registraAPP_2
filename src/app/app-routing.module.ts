import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'perfil-alumno',
    loadChildren: () => import('./pages/perfil-alumno/perfil-alumno.module').then( m => m.PerfilAlumnoPageModule)
  },
  {
    path: 'perfil-docente',
    loadChildren: () => import('./pages/perfil-docente/perfil-docente.module').then( m => m.PerfilDocentePageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'recuperar-contrasena',
    loadChildren: () => import('./pages/recuperar-contrasena/recuperar-contrasena.module').then( m => m.RecuperarContrasenaPageModule)
  },
  {
    path: 'asignaturas',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/asignaturas/asignaturas.module').then( m => m.AsignaturasPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/asignaturas/detalle/detalle.module').then( m => m.DetallePageModule)
      }
    ]
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/asignaturas/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login-docente',
    loadChildren: () => import('./pages/login-docente/login-docente.module').then( m => m.LoginDocentePageModule)
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule)
  },
  {
    path: 'asistencia-alumno',
    loadChildren: () => import('./pages/asistencia-alumno/asistencia-alumno.module').then( m => m.AsistenciaAlumnoPageModule)
  },
  {
    path: 'asignaturas-alumno',
    children: [
      {
        path: "",
        loadChildren: () => import('./pages/asignaturas-alumno/asignaturas-alumno.module').then( m => m.AsignaturasAlumnoPageModule)
      },
      {
        path: ':id',
        loadChildren: () => import('./pages/asignaturas-alumno/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
      }
    ]
  },
  {
    path: 'asistencia-docente',
    loadChildren: () => import('./pages/asistencia-docente/asistencia-docente.module').then( m => m.AsistenciaDocentePageModule)
  },
  {
    path: 'terminos-y-condiciones',
    loadChildren: () => import('./pages/terminos-y-condiciones/terminos-y-condiciones.module').then( m => m.TerminosYCondicionesPageModule)
  },
  {
    path: 'detalle-alumno',
    loadChildren: () => import('./pages/asignaturas-alumno/detalle-alumno/detalle-alumno.module').then( m => m.DetalleAlumnoPageModule)
  },
  {
    path: 'detallecard/id',
    loadChildren: () => import('./pages/detallecard/detallecard.module').then( m => m.DetallecardPageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./pages/api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apidelete/:id',
    loadChildren: () => import('./pages/api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apidetail/:id',
    loadChildren: () => import('./pages/api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./pages/api/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./pages/api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apiupdate/:id',
    loadChildren: () => import('./pages/api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./pages/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'agregaru',
    loadChildren: () => import('./pages/usuarios/agregaru/agregaru.module').then( m => m.AgregaruPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
